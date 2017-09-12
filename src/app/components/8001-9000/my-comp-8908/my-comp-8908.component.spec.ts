import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8908Component } from './my-comp-8908.component';

describe('MyComp8908Component', () => {
  let component: MyComp8908Component;
  let fixture: ComponentFixture<MyComp8908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
