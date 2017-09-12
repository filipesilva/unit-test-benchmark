import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7862Component } from './my-comp-7862.component';

describe('MyComp7862Component', () => {
  let component: MyComp7862Component;
  let fixture: ComponentFixture<MyComp7862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
