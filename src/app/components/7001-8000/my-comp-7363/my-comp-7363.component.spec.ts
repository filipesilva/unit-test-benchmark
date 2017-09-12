import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7363Component } from './my-comp-7363.component';

describe('MyComp7363Component', () => {
  let component: MyComp7363Component;
  let fixture: ComponentFixture<MyComp7363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
