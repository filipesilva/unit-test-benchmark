import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6228Component } from './my-comp-6228.component';

describe('MyComp6228Component', () => {
  let component: MyComp6228Component;
  let fixture: ComponentFixture<MyComp6228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
