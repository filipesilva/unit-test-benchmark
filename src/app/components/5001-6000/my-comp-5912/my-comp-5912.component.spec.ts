import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5912Component } from './my-comp-5912.component';

describe('MyComp5912Component', () => {
  let component: MyComp5912Component;
  let fixture: ComponentFixture<MyComp5912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
