import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6599Component } from './my-comp-6599.component';

describe('MyComp6599Component', () => {
  let component: MyComp6599Component;
  let fixture: ComponentFixture<MyComp6599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
