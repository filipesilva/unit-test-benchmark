import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9490Component } from './my-comp-9490.component';

describe('MyComp9490Component', () => {
  let component: MyComp9490Component;
  let fixture: ComponentFixture<MyComp9490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
