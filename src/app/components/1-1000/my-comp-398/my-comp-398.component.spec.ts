import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp398Component } from './my-comp-398.component';

describe('MyComp398Component', () => {
  let component: MyComp398Component;
  let fixture: ComponentFixture<MyComp398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
