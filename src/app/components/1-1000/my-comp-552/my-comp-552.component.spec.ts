import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp552Component } from './my-comp-552.component';

describe('MyComp552Component', () => {
  let component: MyComp552Component;
  let fixture: ComponentFixture<MyComp552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
