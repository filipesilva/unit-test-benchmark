import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp980Component } from './my-comp-980.component';

describe('MyComp980Component', () => {
  let component: MyComp980Component;
  let fixture: ComponentFixture<MyComp980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
