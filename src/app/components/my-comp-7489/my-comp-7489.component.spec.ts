import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7489Component } from './my-comp-7489.component';

describe('MyComp7489Component', () => {
  let component: MyComp7489Component;
  let fixture: ComponentFixture<MyComp7489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
