import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7923Component } from './my-comp-7923.component';

describe('MyComp7923Component', () => {
  let component: MyComp7923Component;
  let fixture: ComponentFixture<MyComp7923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
