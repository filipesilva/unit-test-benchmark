import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp959Component } from './my-comp-959.component';

describe('MyComp959Component', () => {
  let component: MyComp959Component;
  let fixture: ComponentFixture<MyComp959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
