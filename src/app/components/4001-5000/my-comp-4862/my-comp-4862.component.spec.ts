import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4862Component } from './my-comp-4862.component';

describe('MyComp4862Component', () => {
  let component: MyComp4862Component;
  let fixture: ComponentFixture<MyComp4862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
