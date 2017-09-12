import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9392Component } from './my-comp-9392.component';

describe('MyComp9392Component', () => {
  let component: MyComp9392Component;
  let fixture: ComponentFixture<MyComp9392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
