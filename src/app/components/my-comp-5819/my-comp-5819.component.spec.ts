import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5819Component } from './my-comp-5819.component';

describe('MyComp5819Component', () => {
  let component: MyComp5819Component;
  let fixture: ComponentFixture<MyComp5819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
