import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp621Component } from './my-comp-621.component';

describe('MyComp621Component', () => {
  let component: MyComp621Component;
  let fixture: ComponentFixture<MyComp621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
