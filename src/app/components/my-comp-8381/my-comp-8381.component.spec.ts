import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8381Component } from './my-comp-8381.component';

describe('MyComp8381Component', () => {
  let component: MyComp8381Component;
  let fixture: ComponentFixture<MyComp8381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
