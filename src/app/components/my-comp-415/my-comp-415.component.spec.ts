import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp415Component } from './my-comp-415.component';

describe('MyComp415Component', () => {
  let component: MyComp415Component;
  let fixture: ComponentFixture<MyComp415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
