import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2991Component } from './my-comp-2991.component';

describe('MyComp2991Component', () => {
  let component: MyComp2991Component;
  let fixture: ComponentFixture<MyComp2991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
