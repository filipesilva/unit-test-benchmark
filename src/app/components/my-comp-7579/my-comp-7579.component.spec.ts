import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7579Component } from './my-comp-7579.component';

describe('MyComp7579Component', () => {
  let component: MyComp7579Component;
  let fixture: ComponentFixture<MyComp7579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
