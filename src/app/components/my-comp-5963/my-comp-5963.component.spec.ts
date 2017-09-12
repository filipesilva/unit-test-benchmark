import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5963Component } from './my-comp-5963.component';

describe('MyComp5963Component', () => {
  let component: MyComp5963Component;
  let fixture: ComponentFixture<MyComp5963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
