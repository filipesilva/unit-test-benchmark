import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7155Component } from './my-comp-7155.component';

describe('MyComp7155Component', () => {
  let component: MyComp7155Component;
  let fixture: ComponentFixture<MyComp7155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
