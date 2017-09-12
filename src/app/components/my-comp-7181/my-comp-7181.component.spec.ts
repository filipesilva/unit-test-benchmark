import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7181Component } from './my-comp-7181.component';

describe('MyComp7181Component', () => {
  let component: MyComp7181Component;
  let fixture: ComponentFixture<MyComp7181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
