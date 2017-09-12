import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8557Component } from './my-comp-8557.component';

describe('MyComp8557Component', () => {
  let component: MyComp8557Component;
  let fixture: ComponentFixture<MyComp8557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
