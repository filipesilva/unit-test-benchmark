import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9748Component } from './my-comp-9748.component';

describe('MyComp9748Component', () => {
  let component: MyComp9748Component;
  let fixture: ComponentFixture<MyComp9748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
