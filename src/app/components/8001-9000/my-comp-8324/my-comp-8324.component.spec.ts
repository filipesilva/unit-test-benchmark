import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8324Component } from './my-comp-8324.component';

describe('MyComp8324Component', () => {
  let component: MyComp8324Component;
  let fixture: ComponentFixture<MyComp8324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
