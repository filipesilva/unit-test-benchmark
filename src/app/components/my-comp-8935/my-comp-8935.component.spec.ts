import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8935Component } from './my-comp-8935.component';

describe('MyComp8935Component', () => {
  let component: MyComp8935Component;
  let fixture: ComponentFixture<MyComp8935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
