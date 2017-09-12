import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2137Component } from './my-comp-2137.component';

describe('MyComp2137Component', () => {
  let component: MyComp2137Component;
  let fixture: ComponentFixture<MyComp2137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
