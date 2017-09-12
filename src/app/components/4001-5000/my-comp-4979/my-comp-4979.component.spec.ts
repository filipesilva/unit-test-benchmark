import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4979Component } from './my-comp-4979.component';

describe('MyComp4979Component', () => {
  let component: MyComp4979Component;
  let fixture: ComponentFixture<MyComp4979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
