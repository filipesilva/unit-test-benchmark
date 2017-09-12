import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7260Component } from './my-comp-7260.component';

describe('MyComp7260Component', () => {
  let component: MyComp7260Component;
  let fixture: ComponentFixture<MyComp7260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
