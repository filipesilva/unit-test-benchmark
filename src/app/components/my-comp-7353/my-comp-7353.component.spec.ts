import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7353Component } from './my-comp-7353.component';

describe('MyComp7353Component', () => {
  let component: MyComp7353Component;
  let fixture: ComponentFixture<MyComp7353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
