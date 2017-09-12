import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4584Component } from './my-comp-4584.component';

describe('MyComp4584Component', () => {
  let component: MyComp4584Component;
  let fixture: ComponentFixture<MyComp4584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
