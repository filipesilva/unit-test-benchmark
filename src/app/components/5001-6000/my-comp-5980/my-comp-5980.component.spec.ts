import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5980Component } from './my-comp-5980.component';

describe('MyComp5980Component', () => {
  let component: MyComp5980Component;
  let fixture: ComponentFixture<MyComp5980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
