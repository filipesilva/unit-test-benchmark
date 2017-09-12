import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8819Component } from './my-comp-8819.component';

describe('MyComp8819Component', () => {
  let component: MyComp8819Component;
  let fixture: ComponentFixture<MyComp8819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
