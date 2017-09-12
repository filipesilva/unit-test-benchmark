import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6860Component } from './my-comp-6860.component';

describe('MyComp6860Component', () => {
  let component: MyComp6860Component;
  let fixture: ComponentFixture<MyComp6860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
