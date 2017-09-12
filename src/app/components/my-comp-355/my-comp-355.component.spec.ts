import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp355Component } from './my-comp-355.component';

describe('MyComp355Component', () => {
  let component: MyComp355Component;
  let fixture: ComponentFixture<MyComp355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
