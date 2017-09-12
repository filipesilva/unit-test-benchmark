import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9582Component } from './my-comp-9582.component';

describe('MyComp9582Component', () => {
  let component: MyComp9582Component;
  let fixture: ComponentFixture<MyComp9582Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9582Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
