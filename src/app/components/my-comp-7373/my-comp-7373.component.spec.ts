import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7373Component } from './my-comp-7373.component';

describe('MyComp7373Component', () => {
  let component: MyComp7373Component;
  let fixture: ComponentFixture<MyComp7373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
