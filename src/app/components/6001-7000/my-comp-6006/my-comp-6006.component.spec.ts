import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6006Component } from './my-comp-6006.component';

describe('MyComp6006Component', () => {
  let component: MyComp6006Component;
  let fixture: ComponentFixture<MyComp6006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
