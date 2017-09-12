import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7175Component } from './my-comp-7175.component';

describe('MyComp7175Component', () => {
  let component: MyComp7175Component;
  let fixture: ComponentFixture<MyComp7175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
