import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9336Component } from './my-comp-9336.component';

describe('MyComp9336Component', () => {
  let component: MyComp9336Component;
  let fixture: ComponentFixture<MyComp9336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
