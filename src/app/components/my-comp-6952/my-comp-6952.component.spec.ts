import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6952Component } from './my-comp-6952.component';

describe('MyComp6952Component', () => {
  let component: MyComp6952Component;
  let fixture: ComponentFixture<MyComp6952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
