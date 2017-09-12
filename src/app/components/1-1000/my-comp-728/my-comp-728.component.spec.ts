import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp728Component } from './my-comp-728.component';

describe('MyComp728Component', () => {
  let component: MyComp728Component;
  let fixture: ComponentFixture<MyComp728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
