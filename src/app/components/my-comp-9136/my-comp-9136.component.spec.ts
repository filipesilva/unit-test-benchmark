import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9136Component } from './my-comp-9136.component';

describe('MyComp9136Component', () => {
  let component: MyComp9136Component;
  let fixture: ComponentFixture<MyComp9136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
