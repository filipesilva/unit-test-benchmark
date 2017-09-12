import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5311Component } from './my-comp-5311.component';

describe('MyComp5311Component', () => {
  let component: MyComp5311Component;
  let fixture: ComponentFixture<MyComp5311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
