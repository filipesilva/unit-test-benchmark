import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7667Component } from './my-comp-7667.component';

describe('MyComp7667Component', () => {
  let component: MyComp7667Component;
  let fixture: ComponentFixture<MyComp7667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
