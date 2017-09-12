import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6448Component } from './my-comp-6448.component';

describe('MyComp6448Component', () => {
  let component: MyComp6448Component;
  let fixture: ComponentFixture<MyComp6448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
