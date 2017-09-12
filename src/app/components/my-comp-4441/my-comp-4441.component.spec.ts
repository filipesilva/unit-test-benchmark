import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4441Component } from './my-comp-4441.component';

describe('MyComp4441Component', () => {
  let component: MyComp4441Component;
  let fixture: ComponentFixture<MyComp4441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
