import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8388Component } from './my-comp-8388.component';

describe('MyComp8388Component', () => {
  let component: MyComp8388Component;
  let fixture: ComponentFixture<MyComp8388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
