import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp336Component } from './my-comp-336.component';

describe('MyComp336Component', () => {
  let component: MyComp336Component;
  let fixture: ComponentFixture<MyComp336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
