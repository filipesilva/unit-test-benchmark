import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6093Component } from './my-comp-6093.component';

describe('MyComp6093Component', () => {
  let component: MyComp6093Component;
  let fixture: ComponentFixture<MyComp6093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
