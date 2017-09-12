import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7134Component } from './my-comp-7134.component';

describe('MyComp7134Component', () => {
  let component: MyComp7134Component;
  let fixture: ComponentFixture<MyComp7134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
