import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7388Component } from './my-comp-7388.component';

describe('MyComp7388Component', () => {
  let component: MyComp7388Component;
  let fixture: ComponentFixture<MyComp7388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
